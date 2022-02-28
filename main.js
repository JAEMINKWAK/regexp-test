let str = ` 
010-1234-5678
kurt5451@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
d
hxyp
http://localhost:1234
동해물과_백두산이 마르고 닳도록 하느님이 보우하사
`

console.log(
    str.match(/d$/gm)
  ) 

console.log(
    str.match(/^k/gm)
  ) 

console.log(
    str.match(/./g)
  ) 

  console.log(
    str.match(/h..p/g)
  ) 

  console.log(
    str.match(/fox|dog/g)
  ) 

  console.log(
    str.match(/https?/g)
  ) 

  console.log(
    str.match(/d{2}/)
  ) 

  console.log(
    str.match(/d{2}/g)
  ) 


  console.log(
    str.match(/d{2,}/g)
  ) 

  console.log(
    str.match(/\b\w{2,3}\b/g)
  ) 

  console.log(
    str.match(/[fox]/g)
  )

  console.log(
    str.match(/[0-9]{1,}/g)
  ) 
  
  console.log(
    str.match(/[가-힣]{1,}/g)
  ) 
  
  console.log(
    str.match(/\w/g)
  ) 
  
  console.log(
    str.match(/\b/g)
  ) 
  
  console.log(
    str.match(/\bf\w{1,}\b/g) // 소문자 f로 시작하는 단어를 찾는다.
  ) 
  console.log(
    str.match(/\d{1,}/g)
  ) 
  
  const h = `   the hello world     !`
  console.log(
    h.replace(/\s/g, '')
  ) 
  
  console.log(
    str.match(/.{1,}(?=\@)/g)
  ) 
  
  console.log(
    str.match(/(?<=\@).{1,}/g)
  ) 