export const CartPromises = (
    setMessage,
    setIsSucces,
    setIsLoading,
    setIsFinished
) => {
    const itemsResponse = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolve');
        }, 1000);
    });

    itemsResponse
        .then((result) => {
            console.log(result);
            setMessage(`sucess`);
            setIsSucces(true);
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