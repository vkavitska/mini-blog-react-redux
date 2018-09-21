const POSTS_API={
  getURL:'',
  getInfo:function(){
    return fetch(this.getURL)
      .then(response=>{
        console.log(response.status);
        if (response.ok) {
          let info=response.json();
            return info;         
        }
        throw new Error('Network response was not ok.');
      })
      .then(json=>{
        return json;
        console.log(json);
      })
      .catch(error=>{
        console.log('There has been a problem with your fetch operation: ' + error.message);
      })
  }
}

export default POSTS_API