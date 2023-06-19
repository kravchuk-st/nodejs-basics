const parseArgs = () => {
    const resalt = process.argv.slice(2).reduce((acc, value, i, arr) => {
        if (value.startsWith('--')) acc.push(`${value.substring(2)} is ${arr[++i]}`);
        return acc;
    }, []).join(', ');

    console.log(resalt);
};

parseArgs();
