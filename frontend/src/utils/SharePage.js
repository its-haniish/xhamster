export const sharePage = (title, url) => {
    if (navigator.share) {
        navigator.share({
            title: title,
            url: url
        }).then(() => {
            console.log("Page shared successfully");
        }).catch(err => {
            console.error("Error sharing the page:", err);
        });
    } else {
        // Fallback for browsers that don't support the Web Share API
        alert(`Share this link: ${url}`);
    }
};
