export const promises = (
    items,
    setMessage,
    setIsSucces,
    setIsLoading,
    setIsFinished,
    setCurrentItems
) => {
    const itemsResponse = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items);
        }, 500);
    });

    itemsResponse
        .then((result) => {
            console.log(result);
            setMessage(`sucess`);
            setIsSucces(true);
            setCurrentItems(result);
        })
        .catch((error) => {
            console.log(`Error in progress ${error}`);
            setMessage(`Error: ${error}`);
            setIsSucces(false);
        })
        .finally(() => {
            setIsFinished(true);
            setIsLoading(false);
        });
};