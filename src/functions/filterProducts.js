import scrappedItems from '../data/scrappedItems.json';

export const filterProducts = (category,number=undefined) => {
    return scrappedItems
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .filter(item => {
        return item.categories.some(categories => categories.toLowerCase() === category.toLowerCase())
    }
    ).slice(0,number)
}