export function currency(num){
    return new Intl.NumberFormat('vn').format(num) + 'vnd'
}