export const categoryLink = (...categories) => {
    let link = "/category/"
    for (let category of categories) link += category.replace(" ","_")+"-";
    return link.replace(/-$/, "").toLowerCase()
}

