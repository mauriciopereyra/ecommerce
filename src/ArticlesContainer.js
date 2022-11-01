import './ArticlesContainer.css'

const ArticlesContainer = (props) => {
    const renderArticles = (articles) => {
        return articles.map(article => {
            return (
                <article>
                    <h1 className='article-title'>{article.title}</h1>
                    <p className='article-content'>{article.content}</p>
                </article>
            )
        })
    }

    return (
        <div className='articles-container'>
            <div className='articles-wrapper indented wrapped'>
                {renderArticles(props.items)}
            </div>
        </div>
        )
}

export default ArticlesContainer