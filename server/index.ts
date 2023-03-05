import app from './app'


const init = async () => {
    try {
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`listening on port ${port}`));
        }
    catch (ex) {
        console.log('cant connect to port')
        console.log(ex);
    }
};

init();



