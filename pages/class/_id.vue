<template>
  <div class="flex justify-center pt-20">
    <CardClassDetail
      :item="detail"
      :error="error"
      @press="onJoin"
    />
  </div>
</template>

<script lang="ts">
import {
	defineComponent,
	onMounted,
	ref,
	useRoute,
} from '@nuxtjs/composition-api'
import { IClassDetail, IClassJoin } from '~/models/common/classes'
import { classes } from '~/services'

export default defineComponent({
	setup() {
		const route = useRoute()
		const detail = ref<IClassDetail>({} as IClassDetail)
		const error = ref('')

		onMounted(async () => {
			const res = await classes.detail(parseInt(route.value.params.id))
			if (res.status) {
				detail.value = res.data ?? {}
			}
		})

		const onJoin = async (val: IClassJoin) => {
			if (!val.id) {
				val.id = detail.value.id
			}

			const res = await classes.join({
				classId: val.id,
				attendeeFullName: val.fullName,
				attendeeEmail: val.email,
			})

			if (res.status) {
				error.value = res.data ?? 'Success'
			} else {
				error.value = res.message
			}
		}

		return {
			detail,
			onJoin,
			error,
		}
	},
})
</script>
