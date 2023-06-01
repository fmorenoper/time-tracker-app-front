import Axios from 'axios';
import fileDownload from 'js-file-download';

export const downloadTasks = (e) => {
    e.preventDefault();
    Axios({
        url:"http://localhost:8080/download",
        method:"GET",
        responseType:"blob"
    }).then((res) => {
        fileDownload(res.data, 'data.json');
    })
    
}