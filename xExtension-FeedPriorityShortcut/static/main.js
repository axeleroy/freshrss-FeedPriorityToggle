window.addEventListener('load', () => {

    (() => {
        const context = window.context.extensions.FeedPriorityShortcut

        // Decode double-html-encoded postUrl
        const txt = document.createElement('textarea')
        txt.innerHTML = context.postUrl // once for js_vars
        txt.innerHTML = txt.value       // once for _url
        context.postUrl = txt.value
    })()

    // Add dropdowns
    document.querySelectorAll('.feed.item').forEach((li) => {
        if (!li.dataset.feedId) { return }

        const i = li.dataset.feedId
        const p = context.extensions.FeedPriorityShortcut.priority[i]
        const t = context.extensions.FeedPriorityShortcut.tooltips
	const d = document.createElement('button');
        
	d.title = 'Toggle priority';
        d.classList.add('feed-priority-shortcut');
        d.innerHTML = p;
        d.addEventListener('click', (e) => {
            const currentPriority = e.target.textContent;
            let priority;
            if (currentPriority === '🏠') {
                priority = '📁'
            } else {
                priority = '🏠'
            }
            fetch(context.extensions.FeedPriorityShortcut.postUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    _csrf: context.csrf,
                    feed_id: e.target.closest('.feed.item').dataset.feedId,
                    priority
                })
            })
            .then(() => location.reload())
        });
        li.appendChild(d)
    })
})
