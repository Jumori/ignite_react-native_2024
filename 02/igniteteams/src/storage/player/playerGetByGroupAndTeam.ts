import { playersGetByGroup } from './playersGetBYGroup'

export async function playerGetByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await playersGetByGroup(group)

    const players = storage.filter(player => player.team === team)

    return players
  } catch (error) {
    return Promise.reject(error)
  }
}
