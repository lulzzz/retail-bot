/*
 * Copyright (C) 2016 retailsolutions AG. All rights reserved
 */

'use strict';

exports.showOffers = function() {
    var messageData = {}
    var male = false
    if (male) {
        messageData = {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": [{
                        "title": "Pullover XL with V-neck bordeaux",
                        "subtitle": "EUR 59.99",
                        "image_url": "http://res.cloudinary.com/hiubw7t6w/image/upload/v1463068252/Men/resized/Pullover.jpg",
                        "buttons": [{
                            "type": "web_url",
                            "url": "http://res.cloudinary.com/hiubw7t6w/image/upload/v1463068229/Men/original/Pullover.jpg",
                            "title": "View item"
                        }, {
                            "type": "postback",
                            "title": "Add to Cart",
                            "payload": "100"
                        }]
                    }, {
                        "title": "Shirt slim fit black",
                        "subtitle": "EUR 49.99",
                        "image_url": "http://res.cloudinary.com/hiubw7t6w/image/upload/v1463068252/Men/resized/Shirt.jpg",
                        "buttons": [{
                            "type": "web_url",
                            "url": "http://res.cloudinary.com/hiubw7t6w/image/upload/v1463068228/Men/original/Shirt.jpg",
                            "title": "View item"
                        }, {
                            "type": "postback",
                            "title": "Add to Cart",
                            "payload": "101"
                        }]
                    }, {
                        "title": "Jeans W34/L34",
                        "subtitle": "EUR 99.99",
                        "image_url": "http://res.cloudinary.com/hiubw7t6w/image/upload/v1463068252/Men/resized/Jeans.jpg",
                        "buttons": [{
                            "type": "web_url",
                            "url": "http://res.cloudinary.com/hiubw7t6w/image/upload/v1463068229/Men/original/Jeans.jpg",
                            "title": "View item"
                        }, {
                            "type": "postback",
                            "title": "Add to Cart",
                            "payload": "102"
                        }]
                    }, {
                        "title": "Laptop bag 16'' grey",
                        "subtitle": "EUR 69.99",
                        "image_url": "http://res.cloudinary.com/hiubw7t6w/image/upload/v1463068252/Men/resized/Laptop_Bag.jpg",
                        "buttons": [{
                            "type": "web_url",
                            "url": "http://res.cloudinary.com/hiubw7t6w/image/upload/v1463068229/Men/original/Laptop_Bag.jpg",
                            "title": "View item"
                        }, {
                            "type": "postback",
                            "title": "Add to Cart",
                            "payload": "103"
                        }]
                    }, {
                        "title": "Leather belt brown",
                        "subtitle": "EUR 29.99",
                        "image_url": "http://res.cloudinary.com/hiubw7t6w/image/upload/v1463068252/Men/resized/Leather_Belt.jpg",
                        "buttons": [{
                            "type": "web_url",
                            "url": "http://res.cloudinary.com/hiubw7t6w/image/upload/v1463068229/Men/original/Leather_Belt.jpg",
                            "title": "View item"
                        }, {
                            "type": "postback",
                            "title": "Add to Cart",
                            "payload": "104"
                        }]
                    }]
                }
            }
        }
    } else {
        messageData = {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": [{
                        "title": "Blazer slim fit black",
                        "subtitle": "EUR 59.99",
                        "image_url": "http://res.cloudinary.com/hiubw7t6w/image/upload/v1463130585/Women/resized/Blazer.jpg",
                        "buttons": [{
                            "type": "web_url",
                            "url": "http://res.cloudinary.com/hiubw7t6w/image/upload/v1463068175/Women/original/Blazer.jpg",
                            "title": "View item"
                        }, {
                            "type": "postback",
                            "title": "Add to Cart",
                            "payload": "200"
                        }]
                    }, {
                        "title": "Summer dress chiffon blue",
                        "subtitle": "EUR 19.99",
                        "image_url": "http://res.cloudinary.com/hiubw7t6w/image/upload/v1463130585/Women/resized/Summer_Dress.jpg",
                        "buttons": [{
                            "type": "web_url",
                            "url": "http://res.cloudinary.com/hiubw7t6w/image/upload/v1463068176/Women/original/Summer_Dress.jpg",
                            "title": "View item"
                        }, {
                            "type": "postback",
                            "title": "Add to Cart",
                            "payload": "201"
                        }]
                    }, {
                        "title": "Sports bra purple",
                        "subtitle": "EUR 29.99",
                        "image_url": "http://res.cloudinary.com/hiubw7t6w/image/upload/v1463130586/Women/resized/Sports_Bra.jpg",
                        "buttons": [{
                            "type": "web_url",
                            "url": "http://res.cloudinary.com/hiubw7t6w/image/upload/v1463068176/Women/original/Sports_Bra.jpg",
                            "title": "View item"
                        }, {
                            "type": "postback",
                            "title": "Add to Cart",
                            "payload": "202"
                        }]
                    }, {
                        "title": "Sandals with wedge heel",
                        "subtitle": "EUR 39.99",
                        "image_url": "http://res.cloudinary.com/hiubw7t6w/image/upload/v1463130586/Women/resized/Sandals.jpg",
                        "buttons": [{
                            "type": "web_url",
                            "url": "http://res.cloudinary.com/hiubw7t6w/image/upload/v1463068175/Women/original/Sandals.jpg",
                            "title": "View item"
                        }, {
                            "type": "postback",
                            "title": "Add to Cart",
                            "payload": "203"
                        }]
                    }, {
                        "title": "Wallet vitage stone grey 20x10x3",
                        "subtitle": "EUR 59.99",
                        "image_url": "http://res.cloudinary.com/hiubw7t6w/image/upload/v1463130587/Women/resized/Wallet.jpg",
                        "buttons": [{
                            "type": "web_url",
                            "url": "http://res.cloudinary.com/hiubw7t6w/image/upload/v1463068176/Women/original/Wallet.jpg",
                            "title": "View item"
                        }, {
                            "type": "postback",
                            "title": "Add to Cart",
                            "payload": "204"
                        }]
                    }]
                }
            }
        }
    }
    return messageData;
}
