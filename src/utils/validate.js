
const patternModal = {
     email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    
}
const ERROR_MESSAGE = {
    required:"trường này là bắc buộc",
    pattern:" trường này phải đúng định dạng"
}

export default function validatee(form, rules) {
    console.log(`form`, form)
    console.log(`rules`, rules)

    let errors = {}
    for (let i in rules) {
        let err
        for (let j in rules[i]) {
            const r = rules[i][j]
            if (r.required) {
                err = validateRequired(form[i], r)
                if (err) break
            }
             if (r.pattern) {
                err = validatePattern(form[i], r)
            }
            if(r.min || r.max){
                err = validateMinMax(form[i], r)
            }
        }
        if(err){
            errors[i] = err
        }
    }
    return errors
}
const validateRequired = (value, rule) =>{
    console.log(`object`, typeof value === 'string' && !value.trim() , typeof value === 'undefined')
    if(typeof value === 'string' && !value.trim() || typeof value === 'undefined'){
        return rule.message || ERROR_MESSAGE.required
    }

}

const validatePattern = (value, rule) =>{
    let pattern = rule.pattern
    if(typeof pattern === 'string' &&  typeof patternModal[pattern] !== 'undefined'){
        pattern = patternModal[pattern]
    }
    if(pattern instanceof RegExp){
        if(!pattern.test(value)){
            return rule.message || ERROR_MESSAGE.pattern
        }
    }
}

const validateMinMax = (value, r) => {
  if(r.min && r.max && (value.lenght < r.min || value.lenght > r.max)) return 'trường này phải từ'
  if(r.min &&  value.lenght < r.min ) return r.message || 'trường này k dc be hon 11'
  if(r.max &&  value.lenght > r.max ) return r.message || 'trường này k dc lon hon 32'

}
export const required = (message) =>({
    required: true,
     message
})
export const pattern = (pattern, message) =>({
    pattern, 
    message
})
export const minMax = (min, max, message) =>({
    min, max, message
})