import API from 'Services/Api'

export async function getHero(id) {
    const heroData = await API('heros').find(id)

    return heroData.data.records[0].fields
}
