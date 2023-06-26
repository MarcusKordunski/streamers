function setPages(page, initIndex, endIndex, onChange) {
    const arr = [];
    for (let i = initIndex; i < endIndex; i++) {
        const pageIndex = i + 1;
        arr.push({
            onChange: () => onChange(pageIndex),
            page: pageIndex,
            current: pageIndex === page,
        });
    }
    return arr;
}

export function getVisiblePages(page, pages, onChange) {
    let visiblePages = [];
    const lowestRange = page - 2 < 0 ? 0 : page - 2;
    const highestRange = page + 2 > pages ? pages : page + 2;

    if (pages <= 5 || page < 3) {
        const firstPages = pages > 5 ? 5 : pages;
        visiblePages = [...setPages(page, 0, firstPages, onChange)];
    } else if (lowestRange > 0 && highestRange < pages) {
        visiblePages = [...setPages(page, lowestRange - 1, highestRange, onChange)];
    } else if (highestRange === pages) {
        visiblePages = [...setPages(page, pages - 5, pages, onChange)];
    }

    return visiblePages;
}
