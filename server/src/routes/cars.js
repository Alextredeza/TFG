const path = require('path')
const multer  = require('multer')
const { Router } = require("express");
const { CarSQL } = require("../db");

const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/imgs'))
    },
    filename: function (req, file, cb) {
        const name = `${Date.now()}-${file.originalname}`;
        cb(null, name)
    }
});

router.get("/", async (_, res) => {
    const data = await CarSQL.findAll();
    res.json({ status: true, data });
});

router.get("/popular", async (_, res) => {
    const data = await CarSQL.findAll({ popular: 1 });
    res.json({ status: true, data });
});

router.get("/:idCard", async (req, res) => {
    const { idCard } = req.params;
    const data = await CarSQL.find({ id: idCard });
    res.json({ status: true, data });
});

const cpUpload = multer({ storage }).fields([{ name: 'img', maxCount: 1 }, { name: 'images', maxCount: 8 }])
router.post("/", cpUpload, async (req, res) => {
    const { body } = req;

    if (req?.files?.img) {
        body.img = `/imgs/${req.files.img[0].filename}`;
    }
    if (req?.files?.images) {
        body.images = req.files.images.map((file) => `/imgs/${file.filename}`).join(',');
    }

    const data = await CarSQL.insert(body);
    res.json({ status: true, data });
});

router.put("/:idCard", async (req, res) => {
    const { idCard } = req.params;
    const { body } = req;
    const data = await CarSQL.update({id: idCard}, body);
    res.json({ status: true, data });
});


module.exports = router;