import base64

def getBase64Image(str):
  print(str)
  with open(f'static/{ str }', 'rb') as image_file:
    image=base64.b64encode(image_file.read()).decode('utf-8')

  return image

def getBase64File(str):
  with open(f'static/{ str }', 'rb') as image_file:
    file=base64.b64encode(image_file.read()).decode('utf-8')

  return file