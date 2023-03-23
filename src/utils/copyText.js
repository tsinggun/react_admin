/**
 * @description 复制文本
 * @param {*} content 
 */
function copyPersonURL(content) {
    let that = this
    if (window.ClipboardData) {
        window.clipboardData.setData('text', content)
        alert('链接复制成功')
    } else {
        ;(function (content) {
            document.oncopy = function (e) {
                e.clipboardData.setData('text', content)
                e.preventDefault()
                document.oncopy = null
                that.alert.success('链接复制成功')
            }
        })(content)
        document.execCommand('Copy')
    }
}

export default copyPersonURL