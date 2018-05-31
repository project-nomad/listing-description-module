CREATE DATABASE IF NOT EXISTS Dev_Airbnb_ListingDetails;

USE Dev_Airbnb_ListingDetails;

DROP TABLE IF EXISTS tblListingOverview;
DROP TABLE IF EXISTS tblAmenities;
DROP TABLE IF EXISTS tblPictograms;
DROP TABLE IF EXISTS tblSleepingArrangements;

CREATE TABLE tblListingOverview (
  id INT NOT NULL AUTO_INCREMENT,
  summary TINYTEXT NULL,
  theSpace TEXT NULL,
  guestAccess TINYTEXT NULL,
  interactionWithGuests TINYTEXT NULL,
  otherThingsToNote TINYTEXT NULL,
  homeHighlights1 TINYTEXT NULL,
  homeHighlights2 TINYTEXT NULL,
  homeHighlights3 TINYTEXT NULL,
  houseRules TINYTEXT NULL,
  noOfGuests INT NOT NULL DEFAULT 0,
  noOfBeds INT NOT NULL DEFAULT 0,
  noOfBedrooms INT NOT NULL DEFAULT 0,
  noOfBaths INT NOT NULL DEFAULT 0,
  PRIMARY KEY (ID)
);

CREATE TABLE tblAmenities (
    id INT NOT NULL AUTO_INCREMENT,
    listingID INT NOT NULL,
    pictogramID INT NOT NULL,
    amenityName VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    subCategory VARCHAR(100) NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE tblPictograms (
    id INT NOT NULL AUTO_INCREMENT,
    imgName VARCHAR(100) NOT NULL,
    imgData BLOB NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE tblSleepingArrangements (
    id INT NOT NULL AUTO_INCREMENT,
    listingID INT NOT NULL,
    roomName VARCHAR(100) NOT NULL,
    noOfBeds INT NOT NULL DEFAULT 0,
    PRIMARY KEY (ID)
);