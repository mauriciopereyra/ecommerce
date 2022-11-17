export const styleInfo = (props,window,activeTab,container,currentPage,requestedPage=currentPage) => {
    const items = Array.isArray(props.title) ? props.items[activeTab].length : props.items.length
    const containerWidth = container.current.offsetWidth
    const item = props.type == 'teaser' ? container.current.getElementsByClassName('teaser-card')[0] : container.current.getElementsByClassName('product-listing')[0]
    const itemWidth = parseInt(item.offsetWidth)+parseInt(window.getComputedStyle(item).marginRight)
    // Exact items per page
    const itemsPerPage = containerWidth / itemWidth
    // Items fitting page
    const itemsFitPage = Math.floor(containerWidth / itemWidth)
    // Total pages
    const totalPages = Math.ceil(items / itemsFitPage)

    var newPage = currentPage
    if (currentPage != requestedPage){
        if(requestedPage >= totalPages){
            newPage = 0
        }
        else if(requestedPage < 0) {
            newPage = totalPages - 1
        } else {
            newPage = requestedPage
        }
    }

    const lastPage = newPage +1 == totalPages && newPage != 0

    var newOffset
    if (lastPage){
        newOffset = items * itemWidth - itemsPerPage * itemWidth
    } else if (newPage == 0) {
        newOffset = 0
    } else {
        // Going forward
        if (newPage > currentPage){
            newOffset = itemWidth*itemsFitPage*newPage
        } else {
        // Going backwards
            newOffset = items * itemWidth - itemsFitPage * itemWidth * (totalPages - newPage)
        }
    }

    const visible = totalPages > 1
    console.log(visible)

    return ([
        newPage,
        newOffset,
        visible,
    ])

}
