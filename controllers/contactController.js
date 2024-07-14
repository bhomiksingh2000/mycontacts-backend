// controllers contain all the logic for api
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

/* we will make all the routes as private , so that only a valid 
user can access them , 


*/
//@desc Get all contacts
//@route GET/api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});


//@desc Create new contact
//@route POST/api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    console.log("the req body is : " , req.body);

    // handling when request body is empty : 
    const{name, email, phone} = req.body;

    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All Fields are mandatory");   
        // error message is in HTML format in api response, therefore creating a custom middleware
    }

    const contact = await Contact.create({
        name, 
        email, 
        phone,

    });
    res.status(201).json(contact);
});


//@desc Get specific contact
//@route GET/api/contacts/id
//@access public
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});


//@desc update contact
//@route PUT/api/contacts/id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id, 
        req.body,
        {new : true}
    );
    
    res.status(200).json(updatedContact);
});


//@desc delete contact
//@route DELETE/api/contacts/id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    // Ensure to await the findById method to get the contact
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    // Use the remove method on the document instance (contact)
    await contact.deleteOne();

    // Respond with a success message and the deleted contact
    res.status(200).json({ message: "Contact deleted successfully", deletedContact: contact });
});

module.exports = { 
    getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact};