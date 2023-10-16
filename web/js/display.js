function createRow(container, studentName, samples) {
  const template = document.createElement("template");
  template.innerHTML = `
        <div class="row">
          <div class="rowLabel">
            ${studentName}
          </div>
          ${samples.map((sample) => {
            const { id, label } = sample;
            return `
              <div id=${"sample_" + id} class=${utils.flaggedUsers.includes(id)
                  ? 'sampleContainer blur'
                  : 'sampleContainer'} >
                <img class="thumb" src=${constants.IMG_DIR + "/" + id + ".png"} >
                <div class="sampleContainer">${label}</div>
              </div>
            `;
          })}
        </div>
    `;
  container.appendChild(template.content);
}

function createImage(sample) {
  const { id, label } = sample;
  return `<img class="thumb" src=${constants.IMG_DIR + "/" + id + ".png"} >`;
}
