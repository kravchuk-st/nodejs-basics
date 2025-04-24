const parseArgs = () => {
    const res = process.argv.slice(2).reduce((acc, el, i, arr) => {
        if (el.startsWith('--')) acc.push(`${el.substring(2)} is ${arr[i + 1]}`);
        return acc;
    }, []).join(', ');

    console.log(res);
};

parseArgs();
