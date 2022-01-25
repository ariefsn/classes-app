<template>
  <div class="flex gap-4 m-20">
    <CardClass
      v-for="(c, i) in classItems"
      :key="i"
      :item="c"
      @press="onPress"
    />
  </div>
</template>

<script lang="ts">
import {
	defineComponent,
	onMounted,
	ref,
	useRouter,
} from '@nuxtjs/composition-api'
import { classes } from '@/services'
import { IClassItem } from '~/models/common/classes'

export default defineComponent({
	setup() {
		const router = useRouter()
		const classItems = ref<IClassItem[]>([])

		onMounted(async () => {
			const res = await classes.available()
			if (res.status) {
				classItems.value = res.data?.items ?? []
			}
		})

		const onPress = (id: number) => {
			router.push('/class/' + id)
		}

		return {
			classItems,
			onPress,
		}
	},
})
</script>
