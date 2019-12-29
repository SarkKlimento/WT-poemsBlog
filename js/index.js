function load() {
    const data = [
        {
            index: 'someid',
            header: 'Some header',
            body: 'Some body',
            comments: '77',
            postDate: '07.07.19'
        },
        {
            index: 'someid',
            header: 'Some header',
            body: 'Some body',
            comments: '77',
            postDate: '07.07.19'
        },
        {
            index: 'someid',
            header: 'Some header',
            body: 'Some body',
            comments: '77',
            postDate: '07.07.19'
        },
        {
            index: 'someid',
            header: 'Some header',
            body: 'Some body',
            comments: '77',
            postDate: '07.07.19'
        }
    ];

    data.forEach(post => createPost(post));
}

function createPost(postContent) {
    let postElement = '<div class="col-12 row post"><p class="post-header">|1|</p><p class="post-body">|2|</p><div class="col-12 row no-margin"><div class="col"><p>|3|</p></div><div class="col"><p class="post-footer">|4|</p></div></div></div>\n';

    $("#posts").append($(
        postElement.replace("|1|", postContent.header)
            .replace("|2|", postContent.body)
            .replace("|3|", 'Комментариев: ' + postContent.comments)
            .replace("|4|", postContent.postDate)
    ));
}

load();