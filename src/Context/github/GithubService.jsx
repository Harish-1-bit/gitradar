export let searchUser = async (searchQuery) => {
    let response = await fetch(`https://api.github.com/search/users?q=${searchQuery}`)
    let data = await response.json()
    console.log(data.items);
    return data.items 
}
export let fetchUser = async (id) => {
    let response = await fetch(`https://api.github.com/users/${id}`)
    let data = await response.json()
    return data

}