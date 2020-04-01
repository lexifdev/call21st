import getDB from './_db'
import statsStore from 'stores/stats'


export default {
    create: async (candidateId, content) => {
        if (!content) {
            content = '후보님의 생각이 궁금합니다.'
        }

        const db = getDB()

        const created = await db.collection('requests').add({
            candidate: candidateId,
            content: content,
        })

        await statsStore.increment('requests')

        const exists = (await db.collection('requests')
            .where('candidate', '==', candidateId)
            .limit(1)
            .get()).exists

        if (!exists) {
            await statsStore.increment('targets')
        }

        return created.id
    }
}