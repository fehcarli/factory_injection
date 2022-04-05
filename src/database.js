function createDatabaseConnection() {
    function start(){
        console.log('> [database] Starting...');
        console.log('> [database] Connecting to Postgres...');
        console.log('> [database] Running Migrations...');
        console.log('> [database] Starting done!');
    }

    function stop(){
        console.log('> [database] Stopping...');
        console.log('> [database] Closing Postgres connection...');
        console.log('> [database] Stopping done!');
    }

    return {
        start,
        stop
    }
}

export default createDatabaseConnection;