import base64

def getBase64Image(str):
  with open(f'static/images/{ str }', 'rb') as image_file:
    image=base64.b64encode(image_file.read()).decode('utf-8')

  return image