/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import PropTypes from 'prop-types';

function getYoutubeId(url) {
    const regExp = /(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
}


const YoutubeVideo = ({
    link,
    autoplay = false,
    isMute = false,
    lazyload = true,
    facade = false,
    className = '',
    playbackrate,
    showControls = true,
    start = 0,
}) => {
    const videoId = getYoutubeId(link);

    if (!videoId) {
        return <div className={className}>Invalid YouTube link</div>;
    }

    // Only use IFrame API when facade is false
    const playerRef = React.useRef(null);
    const ytPlayerRef = React.useRef(null);
    const uniqueId = React.useMemo(() => `yt-player-${videoId}-${Math.random().toString(36).substr(2, 9)}`, [videoId]);

    React.useEffect(() => {
        if (facade) return;
        if (!videoId) return;

        // Load the IFrame API if not already loaded
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.body.appendChild(tag);
        }

        let player;
        function onYouTubeIframeAPIReady() {
            player = new window.YT.Player(uniqueId, {
                videoId,
                playerVars: {
                    autoplay: autoplay ? 1 : 0,
                    mute: isMute ? 1 : 0,
                    rel: 0,
                    modestbranding: 1,
                    playsinline: 1,
                    controls: showControls ? 1 : 0,
                    start: start > 0 ? start : undefined,
                },
                events: {
                    onReady: (event) => {
                        if (typeof playbackrate === 'number') {
                            try {
                                event.target.setPlaybackRate(playbackrate);
                            } catch (e) { /* ignore */ }
                        }
                    },
                },
            });
            ytPlayerRef.current = player;
        }

        if (window.YT && window.YT.Player) {
            onYouTubeIframeAPIReady();
        } else {
            window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
        }

        return () => {
            if (ytPlayerRef.current && ytPlayerRef.current.destroy) {
                ytPlayerRef.current.destroy();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoId, autoplay, isMute, playbackrate, facade, showControls, start]);

    if (facade) {
        // Facade: show thumbnail, load iframe on click
        const [showIframe, setShowIframe] = React.useState(false);
        const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        const params = [
            autoplay ? 'autoplay=1' : '',
            isMute ? 'mute=1' : '',
            showControls ? '' : 'controls=0',
            start > 0 ? `start=${start}` : '',
            'rel=0',
            'modestbranding=1',
            'playsinline=1',
        ].filter(Boolean).join('&');
        const embedUrl = `https://www.youtube.com/embed/${videoId}?${params}`;
        return (
            <div className={className} style={{ position: 'relative', cursor: 'pointer', maxWidth: 560 }}>
                {showIframe ? (
                    <iframe
                        src={embedUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading={lazyload ? 'lazy' : undefined}
                        style={{ width: '100%', height: 315 }}
                    />
                ) : (
                    <div onClick={() => setShowIframe(true)} style={{ position: 'relative' }}>
                        <img
                            src={thumbnail}
                            alt="YouTube video thumbnail"
                            style={{ width: '100%', height: 315, display: 'block' }}
                            loading={lazyload ? 'lazy' : undefined}
                        />
                        <div style={{
                            position: 'absolute', top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                            background: 'rgba(0,0,0,0.6)', borderRadius: '50%', padding: 20
                        }}>
                            <svg width="40" height="40" viewBox="0 0 40 40">
                                <polygon points="15,10 30,20 15,30" fill="#fff"/>
                            </svg>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // Render a div for the YouTube player
    return (
        <div className={className}>
            <div id={uniqueId} ref={playerRef} style={{ width: '100%' }} />
        </div>
    );
};

YoutubeVideo.propTypes = {
    link: PropTypes.string.isRequired,
    autoplay: PropTypes.bool,
    isMute: PropTypes.bool,
    lazyload: PropTypes.bool,
    facade: PropTypes.bool,
    className: PropTypes.string,
    playbackrate: PropTypes.number,
    showControls: PropTypes.bool,
    start: PropTypes.number,
};

export default YoutubeVideo;
