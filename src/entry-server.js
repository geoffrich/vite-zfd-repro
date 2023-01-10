import pkg from "zod-form-data";
const { zfd } = pkg;

const schema = zfd.formData({
  name: zfd.text()
});

export function render() {
  const params = schema.parse(new URLSearchParams("name=test"));

  const html = `
    ${JSON.stringify(params)}
  `;
  return { html };
}
