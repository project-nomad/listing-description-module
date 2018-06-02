CREATE DATABASE IF NOT EXISTS Dev_Airbnb_ListingDetails;

USE Dev_Airbnb_ListingDetails;

DROP TABLE IF EXISTS tblListingOverview;
DROP TABLE IF EXISTS tblAmenities;
DROP TABLE IF EXISTS tblPictograms;
DROP TABLE IF EXISTS tblSleepingArrangements;
DROP TABLE IF EXISTS refAmenities;

CREATE TABLE tblListingOverview (
  id INT NOT NULL AUTO_INCREMENT,
  summary TEXT NULL,
  theSpace TEXT NULL,
  guestAccess TEXT NULL,
  interactionWithGuests TEXT NULL,
  otherThingsToNote TEXT NULL,
  homeHighlights1 TEXT NULL,
  homeHighlights2 TEXT NULL,
  homeHighlights3 TEXT NULL,
  houseRules TEXT NULL,
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
    category VARCHAR(100) NOT NULL,
    subCategory VARCHAR(100) NOT NULL,
    additionalComments VARCHAR(100) NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE refAmenities (
    id INT NOT NULL AUTO_INCREMENT,
    category VARCHAR(100) NOT NULL,
    subCategory VARCHAR(100) NOT NULL,
    additionalComments VARCHAR(100) NULL,
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