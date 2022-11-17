import scrappedItems from '../data/scrappedItems.json';

export const filterProducts = (category,number=undefined) => {
    return scrappedItems.filter(item => {
        return item.categories.some(categories => categories.toLowerCase() === category.toLowerCase())
    }
    ).slice(0,number)
}