const Dashboard = {
    init: () => {
        Dashboard.events.init();
    },
    events: {
        init: () => {
            const toast = document.getElementById('flags');
            document.getElementById('subs').addEventListener('mouseover', () => {
                toast.style.display = 'block';
            });
            document.getElementById('subs').addEventListener('mouseout', () => {
                toast.style.display = 'none';
            });
        }
    }
};

(() => {
    Dashboard.init();
})();