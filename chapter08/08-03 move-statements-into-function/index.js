// 사진 관련 데이터를 HTML로 내보내는 코드
function renderPerson(outStream, person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(`<p>제목: ${person.photo.title}</p>`);
  result.push(emitPhotoData(person.photo));
  return result.join("\n");
}

function photoDiv(p) {
  return ["<div>", `<p>제목: ${p.title}</p>`, emitPhotoData(p), "</div>"].join(
    "\n"
  );
}

function emitPhotoData(aPhoto) {
  const result = [];
  result.push(`<p>위치: ${aPhoto.location}</p>`);
  result.push(`<p>날짜: ${aPhoto.date.toDateString()}</p>`);
  return result.join("\n");
}
