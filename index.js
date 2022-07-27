import psList from 'ps-list';


const showProcesses = async () => {
    console.log(await psList());
}

showProcesses()