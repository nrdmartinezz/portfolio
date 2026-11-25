---
name: Fix Firebase deploy CI
overview: The GitHub Actions workflow on master already deploys Firebase Hosting and the contact Cloud Function. Hosting succeeds; the function deploy fails because the GitHub service account cannot act as the function runtime account. Grant that permission, then rerun the failed deploy.
todos:
  - id: grant-iam
    content: Grant the GitHub Actions service account Functions, Cloud Run, Artifact Registry, Cloud Build, and Service Account User on both runtime accounts
    status: completed
  - id: rerun-deploy
    content: Rerun the failed master Deploy workflow and confirm Hosting plus the contact function succeed
    status: completed
isProject: false
---

# Fix Firebase Hosting and function deploy

The production pipeline is already on `master` in [nrdmartinezz/portfolio](https://github.com/nrdmartinezz/portfolio), in `.github/workflows/deploy.yml`. A push to `master` installs the site and `functions/`, runs `npm run verify` and `npm run build`, deploys Hosting to `portfolio-dd896`, then deploys the `contact` function with `firebase-tools@14`.

The latest run ([45449483093](https://github.com/nrdmartinezz/portfolio/actions/runs/45449483093)) got through Hosting and failed only on the function step:

`iam.serviceAccounts.ActAs` is missing on `portfolio-dd896@appspot.gserviceaccount.com`.

`contact` is already live as a 2nd gen HTTPS function in `us-west1` (`nodejs22`). The GitHub secret `FIREBASE_SERVICE_ACCOUNT_PORTFOLIO_DD896` exists. This workspace’s `New-Site` branch is a different Vite app and is not on GitHub; leave it unchanged.

## Grant deploy permissions

In Google Cloud IAM for project `portfolio-dd896` (number `357256441940`), find the service account created for the Firebase Hosting GitHub Action. It is the `client_email` inside the existing GitHub secret, usually named `github-action-…@portfolio-dd896.iam.gserviceaccount.com`, and it already has Firebase Hosting Admin. Do not print or rewrite the private key.

Give that account:

- Project roles: Cloud Functions Admin, Cloud Run Admin, Artifact Registry Writer, Cloud Build Editor
- `Service Account User` on the two runtime accounts the function deploy must act as:
  - `portfolio-dd896@appspot.gserviceaccount.com` (the account named in the failed run)
  - `357256441940-compute@developer.gserviceaccount.com` (2nd gen default runtime)

`gcloud` is not installed. Apply these bindings in the Cloud Console while signed in as `nrd.martinezz@gmail.com`, who already has Firebase access to this project.

## Rerun and confirm

Rerun the failed Deploy run on `master` with `gh run rerun 45449483093`. No workflow edit is required. Confirm the job goes green, Hosting publishes the live channel, and `contact` remains deployed in `us-west1`.

If the rerun fails on a later permission (Cloud Build acting as the runtime account, or Secret Manager for `RESEND_API_KEY`), add only that missing role and rerun again. The function source already references `RESEND_API_KEY`, and a previous owner deploy succeeded, so that secret should already exist.