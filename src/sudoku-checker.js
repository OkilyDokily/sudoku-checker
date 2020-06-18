export function convertStringToArray(string){
    return [...string].map(function(item){
      return parseInt(item);
    });
}