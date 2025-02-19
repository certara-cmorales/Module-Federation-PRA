const MFE_HOST = 'MFE_HOST';
const MFE_REMOTE = 'MFE_REMOTE';

const listeners = {};

function start() {
    window.addEventListener(MFE_HOST, handleEvent);
}

function stop() {
    window.removeEventListener(MFE_HOST, handleEvent);
}

function subscribe(id, listener) {
    listeners[id] = listener;
}

function unsubscribe(id) {
    delete listeners[id];
}

function dispatch (detail) {
    const event = new CustomEvent(MFE_REMOTE, {detail});
    window.dispatchEvent(event);
}

function handleEvent (event) {
    const actions  = Object.values(listeners);
    if (event?.detail && actions.length > 0) {
        actions.forEach((action) => {
            action(event.detail)
        });
    }
}

const windowEventBridge =  {start, stop, dispatch, subscribe, unsubscribe}

export default windowEventBridge ;



