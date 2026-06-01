 const tabs = document.querySelectorAll('.post-tab');

        const posts = document.querySelectorAll('.post');

        function activatePost(id) {

            posts.forEach(post => {
                post.classList.remove('active-post');
            });

            tabs.forEach(tab => {
                tab.classList.remove('active-tab');
            });

            document
                .getElementById(id)
                .classList.add('active-post');

            document
                .querySelector('.post-tab[data-post="' + id + '"]')
                .classList.add('active-tab');
        }

        tabs.forEach(tab => {

            tab.addEventListener('click', function () {

                const id = this.getAttribute('data-post');

                activatePost(id);

            });

        });






