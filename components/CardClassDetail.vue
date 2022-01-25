<template>
  <div class="w-1/2 shadow shadow-gray-400 rounded rounded-md p-4">
    <div v-if="!showJoinForm">
      <div class="font-bold">{{ item.name }}</div>
      <div class="text-sm">{{ item.description }}</div>
      <div class="mt-2 mb-3 text-sm">
        <div class="font-bold">Mentors:</div>
        <ul>
          <li
            v-for="(m, i) in item.mentors"
            :key="i"
            class="ml-7 list-decimal"
          >
            {{ m.name }} ({{ m.description }})
          </li>
        </ul>
      </div>
      <span
        class="p-2 text-xs font-bold hover:(text-emerald-400 cursor-pointer bg-white border border-emerald-400) bg-emerald-400 text-white rounded rounded-sm"
        @click="showJoinForm = true"
      >Join</span>
      <div
        v-if="error"
        class="text-red-500 text-sm mt-2"
      >{{ error }}</div>
    </div>
    <div v-else>
      <div>
        <div>
          <input
            id="fullName"
            v-model="model.fullName"
            placeholder="Full Name"
            class="border border-gray-300 p-1 rounded rounded-sm text-sm my-1 w-full"
            type="text"
          >
        </div>
        <div>
          <input
            id="email"
            v-model="model.email"
            placeholder="Email"
            class="border border-gray-300 p-1 rounded rounded-sm text-sm my-1 mb-3 w-full"
            type="text"
          >
        </div>
      </div>
      <span
        class="p-2 text-xs font-bold hover:(text-emerald-400 cursor-pointer bg-white border border-emerald-400) bg-emerald-400 text-white rounded rounded-sm"
        @click="showJoinForm = false; join()"
      >Submit</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { IClassDetail, IClassJoin } from '~/models/common/classes'

export default defineComponent({
	props: {
		item: {
			type: Object as () => IClassDetail,
			required: false,
			default: () => ({} as IClassDetail),
		},
		error: {
			type: String,
			required: false,
			default: undefined,
		},
	},
	emits: ['press'],
	setup({ item }, { emit }) {
		const showJoinForm = ref(false)

		const model = ref<IClassJoin>({} as IClassJoin)

		const join = () => {
			model.value.id = item.id
			emit('press', model.value)
		}

		return { join, showJoinForm, model }
	},
})
</script>
