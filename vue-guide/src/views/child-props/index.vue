<template>
    <div>
        <h1>Child Props</h1>
        <p>username: {{ formState.username }}</p>
        <p>password: {{ formState.password }}</p>
        <p>remember: {{ formState.remember }}</p>
        <p>account: {{ account }}</p>
        <p>score: {{ score }}</p>
        <p>school: {{ school }}</p>

        <ChildProps1 :form-state="formState" />
        <ChildProps2 v-model:form-state="formState" />
        <ChildProps3 :form-state="formState" :score="score" :account="account" v-model:school="school" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChildProps1 from './child-props1.vue'
import ChildProps2 from './child-props2.vue'
import ChildProps3 from './child-props3.vue'
import type { FormState } from './types'

let formState = ref<FormState>({
    username: "jack",
    password: 18,
    remember: false as boolean
})
let score = ref(57)
let account = ref('tom')
let school = ref('tinghua')

const updateFormState = (newFormState: FormState) => {
    formState.value = newFormState
}
</script>

<style scoped></style>