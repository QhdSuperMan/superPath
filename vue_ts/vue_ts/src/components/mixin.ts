
import { Vue } from 'vue-property-decorator'



export default class FormValidateMixin extends Vue {
  handleReset(name: string): void {
    window.alert(`${name}`)
  }
}
