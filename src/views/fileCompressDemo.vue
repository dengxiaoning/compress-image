<template>
  <div>
    <h2>图片压缩</h2>
    <van-form>
      <van-field name="uploader"
                 label="上传照片">
        <template #input>
          <van-uploader v-model="uploaderFilelist"
                        :max-count="50"
                        multiple
                        accept="image/*" />
        </template>
      </van-field>

    </van-form>
    <div class="wrapper-footer">
      <van-button type="default"
                  size="small"
                  @click="resetBtn">重置</van-button>
      <van-button type="info"
                  size="small"
                  loading-text="上传"
                  @click="submitProblemData">压缩</van-button>
    </div>
  </div>
</template>
<script>
import { reduceFileSize } from '@/utils/compress'
import { saveAs } from 'file-saver';
export default {
  data() {
    return {
      uploaderFilelist: []
    }
  }, methods: {
    submitProblemData() {
      const fileArr = this.uploaderFilelist

      fileArr.forEach(item => {
        const file = item.file;
        const filename = file.name;
        // 调用图片压缩
        this.compressFileByPlugins({ file }, resComFile => {
          saveAs(resComFile, filename)
        })
      })

    },
    /**
 * 压缩文件
 */
    compressFileByPlugins({ file, acceptFileSize = 500 * 1024, maxWidth = 1000, maxHeight = Infinity, quality = 0.9 }, callback) {
      reduceFileSize(file, acceptFileSize, maxWidth, maxHeight, quality, callback)
    },
    resetBtn() {
      this.uploaderFilelist = []
    }
  }
}
</script>
<style>
.wrapper-footer {
  display: flex;
  justify-content: space-around;
}
</style>