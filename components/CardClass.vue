<template>
  <div class="w-1/3 gap-4 shadow shadow-gray-400 rounded rounded-md p-4 relative pb-15">
    <div class="font-bold">{{ item.name }}</div>
    <div class="absolute bottom-3 left-4 pt-2">
      <div
        class="p-2 text-xs font-bold hover:(text-emerald-400 cursor-pointer bg-white border border-emerald-400) bg-emerald-400 text-white rounded rounded-sm"
        @click="goDetail"
      >Detail</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { IClassItem } from '~/models/common/classes'

export default defineComponent({
	props: {
		item: {
			type: Object as () => IClassItem,
			required: false,
			default: () => ({} as IClassItem),
		},
	},
	emits: ['press'],
	setup({ item }, { emit }) {
		const goDetail = () => {
			emit('press', item.id)
		}

		return { goDetail }
	},
})
</script>
