export default function dest(obj) {
    let {name, type, health, level, attack, defence, special} = obj;
    let arr = [];
    for (let i = 0; i < special.length; i++) {
        let {id, name, icon, description = 'Описание недоступно'} = special[i];
        arr.push({id, name, icon, description});
    }
    return arr;
}
