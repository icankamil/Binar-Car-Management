# Binar Car Management

Management data mobil berbasis web dengan tech stack Node.JS dan PostgresSQL

## Entity Relationship Diagram (ERD)

ERD dari sistem ini bisa dilihat melalui tautan berikut : https://dbdiagram.io/d/633990537b3d2034ff06a35f

## Hyperlink

- Akses Homepage/Get All data = http://hostname/
- Akses Halaman Create mobil = http://hostname/Car
- Akses Halaman Edit Mobil = http://hostname/Car/:id

## API Endpoint

- Create data mobil baru = POST `http://hostname/Car`
- Get semua data mobil = GET `http://hostname/`
- Get satu data mobil = GET `http://hostname/Car/:id`
- Delete satu data mobil = DELETE `http://hostname/Car/:id`
- Update satu data mobil = PUT `http://hostname/Car/:id`

## Contoh Request Body dan Response

- Request body GET satu data mobil

```
      "url": "http://localhost:3000/Car/79",
      "name": "get single car",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [],
      "headers": [
        {
          "id": "pair_415d9b5bcd444454b0b764bd116c995c",
          "name": "insomnia",
          "value": "true",
          "description": ""
        }
```

- Response GET satu data mobil

```
{
	"id": 79,
	"name_mobil": "Subaru",
	"rent_mobil": 125300,
	"size_mobil": 55,
	"photo_mobil": "/img/photo-1664714922795.jpg",
	"createdAt": "2022-10-02T09:17:03.039Z",
	"updatedAt": "2022-10-02T12:48:42.808Z"
}
```

- Request body PUT satu data mobil

```
     "url": "http://localhost:3000/Car/79",
      "name": "update car",
      "description": "",
      "method": "PUT",
      "body": {
        "mimeType": "multipart/form-data",
        "params": [
          {
            "id": "pair_c42582cbae1a4939ba981f0d0fc37d1d",
            "name": "name",
            "value": "Subaru",
            "description": ""
          },
          {
            "id": "pair_65da778481ab4f8a927fc6a89a8fef27",
            "name": "rent",
            "value": "125300",
            "description": ""
          },
          {
            "id": "pair_eac12384df114a99b1877bebbcdb87a3",
            "name": "size",
            "value": "75",
            "description": ""
          },
          {
            "id": "pair_5a6f4dbda1d74ac1a3a73d70bc6cfec0",
            "name": "photo",
            "value": "",
            "description": "",
            "type": "file",
            "fileName": "F:\\Downloads\\61c667cd61d243e58a94cfd12f22f193.jpg"
          }
        ]
      },
      "parameters": [],
      "headers": [
        {
          "name": "Content-Type",
          "value": "multipart/form-data",
          "id": "pair_25a4d928af1845f1b9a757a94200203d"
        },
        {
          "id": "pair_b64a367c9ddf4ec9817aff40162c5ae9",
          "name": "insomnia",
          "value": "true",
          "description": ""
        }
      ],
```

- Response PUT satu data mobil

```
{
	"Message": "Data Berhasil Diupdate"
}
```

- Request body GET semua data mobil

```
      "url": "http://localhost:3000/",
      "name": "Get All car",
      "description": "",
      "method": "GET",
      "body": {
        "mimeType": "multipart/form-data",
        "params": [
          {
            "id": "pair_b6f542727f8e46ceba3a242cce355f1a",
            "name": "picture",
            "value": "",
            "description": "",
            "type": "file",
            "fileName": "C:\\Users\\User\\Pictures\\278111217_10226907563625454_8762704668951383652_n.jpg",
            "disabled": true
          }
        ]
      },
      "parameters": [],
      "headers": [
        {
          "name": "Content-Type",
          "value": "multipart/form-data",
          "id": "pair_a6bb7eaa48654e1aa8bfe11925e12757"
        },
        {
          "id": "pair_e31f80c268364b86bb5c6ff3912d91a2",
          "name": "insomnia",
          "value": "true",
          "description": ""
        }
```

- Response GET semua data mobile

```
 [
	{
		"id": 80,
		"name_mobil": "Accura",
		"rent_mobil": 50000,
		"size_mobil": 3,
		"photo_mobil": "/img/photo-1664714540672.jpg",
		"createdAt": "2022-10-02T12:42:20.678Z",
		"updatedAt": "2022-10-02T12:42:20.678Z"
	},
	{
		"id": 82,
		"name_mobil": "Accura",
		"rent_mobil": 50000,
		"size_mobil": 3,
		"photo_mobil": "/img/photo-1664718234759.jpg",
		"createdAt": "2022-10-02T13:43:54.787Z",
		"updatedAt": "2022-10-02T13:43:54.787Z"
	},
	{
		"id": 77,
		"name_mobil": "adswaed",
		"rent_mobil": 12131,
		"size_mobil": 3,
		"photo_mobil": "/img/photo-1664704896443.jfif",
		"createdAt": "2022-10-02T08:31:01.525Z",
		"updatedAt": "2022-10-02T10:01:36.447Z"
	},
	{
		"id": 81,
		"name_mobil": "asada",
		"rent_mobil": 13213,
		"size_mobil": 1,
		"photo_mobil": "/img/photo-1664716467057.jfif",
		"createdAt": "2022-10-02T13:14:27.066Z",
		"updatedAt": "2022-10-02T13:14:27.066Z"
	},
	{
		"id": 78,
		"name_mobil": "asdacsad",
		"rent_mobil": 12334,
		"size_mobil": 2,
		"photo_mobil": "/img/photo-1664700145945.jpg",
		"createdAt": "2022-10-02T08:42:26.378Z",
		"updatedAt": "2022-10-02T08:42:26.378Z"
	},
	{
		"id": 61,
		"name_mobil": "Kawasakiz",
		"rent_mobil": 1200002,
		"size_mobil": 2,
		"photo_mobil": "/img/photo-1664696962538.jpg",
		"createdAt": "2022-10-01T13:15:48.537Z",
		"updatedAt": "2022-10-02T07:49:22.542Z"
	},
	{
		"id": 79,
		"name_mobil": "Subaru",
		"rent_mobil": 125300,
		"size_mobil": 75,
		"photo_mobil": "/img/photo-1664718738989.jpg",
		"createdAt": "2022-10-02T09:17:03.039Z",
		"updatedAt": "2022-10-02T13:52:18.996Z"
	}
]
```

- Request body DELETE satu data mobil

```
"url": "http://localhost:3000/Car/12",
      "name": "Delete car",
      "description": "",
      "method": "DELETE",
      "body": {
        "mimeType": "multipart/form-data",
        "params": [
          {
            "id": "pair_ec38d44e913547598d18c7397b1ef3b8",
            "name": "",
            "value": "",
            "description": "",
            "disabled": true
          },
          {
            "id": "pair_2f6baaa09c644d3290f716e245f45fdf",
            "name": "",
            "value": "",
            "description": "",
            "disabled": true
          },
          {
            "id": "pair_06e24eec6aea4343a3c510fb6afa5141",
            "name": "picture",
            "value": "",
            "description": "",
            "type": "file",
            "fileName": "C:\\Users\\User\\Pictures\\246176081_1356917351434317_4884248360481819527_n.jpg",
            "disabled": true
          }
        ]
      },
      "parameters": [],
      "headers": [
        {
          "name": "Content-Type",
          "value": "multipart/form-data",
          "id": "pair_42177f58544744a187d44861a3bff7bc"
        }
      ],
```

- Response DELETE satu data mobil

```
{
	"Message": "Data Berhasil Dihapus"
}
```

- Request body POST satu data mobil

```
"url": "http://localhost:3000/Car",
      "name": "Insert Car",
      "description": "",
      "method": "POST",
      "body": {
        "mimeType": "multipart/form-data",
        "params": [
          {
            "name": "{\t\"name\":\"Hyundai Electron\",\t\"rent\":20000,\t\"size\":1,\"photo\":\"https://static.carmudi.co.id/KTIt3sZfPDD8HkLh45EzfMlxsMw",
            "value": "/900x405/https://trenotomotif.com/ncs/images/Hyundai/Hyundai_Ioniq_Electric/Hyundai-Ioniq-Electric.jpg\"}",
            "id": "pair_cb66a0d09ae74f29beda49a3bfee8844"
          },
          {
            "id": "pair_5e6606b119674fd0a16dd976fdea22d4",
            "name": "name",
            "value": "Accura",
            "description": ""
          },
          {
            "id": "pair_d574f063e28b4c20af4ce0faeacd110f",
            "name": "rent",
            "value": "50000",
            "description": ""
          },
          {
            "id": "pair_b2c171f9849b4ccea143a34edb4bef36",
            "name": "size",
            "value": "3",
            "description": ""
          },
          {
            "id": "pair_ac83ddb807414248af8c1d1dbc5ff5dc",
            "name": "photo",
            "value": "",
            "description": "",
            "type": "file",
            "fileName": "F:\\Downloads\\61c667cd61d243e58a94cfd12f22f193.jpg"
          }
        ]
      },
      "parameters": [],
      "headers": [
        {
          "name": "Content-Type",
          "value": "multipart/form-data",
          "id": "pair_83d81b1ba25240d2979b3be48172f4f2"
        },
        {
          "id": "pair_7a9c11898eeb47e0a09ee585aa8103c5",
          "name": "insomnia",
          "value": "true",
          "description": ""
        }
      ],
```

- Response POST satu data mobil

```
{
	"message": "Data Berhasil Ditambahkan"
}
```
