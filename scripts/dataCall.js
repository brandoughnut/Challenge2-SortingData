let storedData;

const dataCall = async () => {
    const promise = await fetch('./data/data.json');
    const data = await promise.json();
    storedData = data.People;
    return data.People;
}

export {storedData, dataCall}