const configApp = ({ dealers = '' } = '') => {
    let params = '';
    if (!dealers || !dealers.length) params = '';
    else params = `?dealers=${dealers.join(',')}`;
    localStorage.setItem('params', JSON.stringify(params));
}